import { useState } from "react";
import { addDoc, collection, getFirestore } from "firebase/firestore";
export const dbService = getFirestore();

export default function NewsWrite() {
    const [title, setTitle] = useState('');
    const [content, setContent] = useState('');
    const handleTitle = (event) => {
        const {
          target: { value },
        } = event;
        setTitle(value);
    };
    const handleContents = (event) => {
        const {
          target: { value },
        } = event;
        setContent(value);
    };
    const handleSubmit = async (e) => {
        try {
            const docRef = await addDoc(collection(dbService, "notification"), {
                title: title,
                content: content,
                /*createAt: Date.now(),*/
            });
            setContent(docRef);
        } catch (error) {
            console.log(error);
        }
    }

    return(
        <div>
            <div>
                제목
                <input value={title} onChange={handleTitle}></input>
            </div>
            <div>
                내용
                <input value={content} onChange={handleContents}></input>
            </div>
            <div>
                <button onClick={handleSubmit}>등록</button>
            </div>
        </div>
    )
}