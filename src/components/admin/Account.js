import React, { useEffect, useState, useRef } from 'react'
import { auth, store } from '../../firebase'
import { Editor } from '@tinymce/tinymce-react';

const Account = () => {

    const [user, setUser] = useState(null);

    const [userEmail, setUserEmail] = useState('')



    const editorRef = useRef(null);
    const log = () => {
      if (editorRef.current) {
        console.log(editorRef.current.getContent());
      }
    };

    return (
        <div>
            <p>Mi suscripción</p>
            <p>{userEmail}</p>
            <p>email:</p>
            <p>{userEmail}</p>       
            <Editor
                apiKey="mymbkaj0hl9txwpvhiv5n58z1m0s8n5jf1qj58xluzhi15ow"
                onInit={(evt, editor) => editorRef.current = editor}
                initialValue="<p>This is the initial content of the editor.</p>"
                init={{
                    height: 500,
                    menubar: false,
                    plugins: [
                        'advlist autolink lists link image charmap print preview anchor',
                        'searchreplace visualblocks code fullscreen',
                        'insertdatetime media table paste code help wordcount'
                    ],
                    toolbar: 'undo redo | formatselect | ' +
                        'bold italic backcolor | alignleft aligncenter ' +
                        'alignright alignjustify | bullist numlist outdent indent | ' +
                        'removeformat | help',
                    content_style: 'body { font-family:Helvetica,Arial,sans-serif; font-size:14px }'
                }}
            />
            <button onClick={log}>Log editor content</button>


        </div>
    )
}

export default Account
