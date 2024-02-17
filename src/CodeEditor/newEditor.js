import {Editor,useMonaco} from "@monaco-editor/react"
import { useEffect ,useState} from "react";
export default function TextEditor(props){
    let monaco = useMonaco();
    let [mounted,setMounted] = useState(false);
    useEffect(() => {
        if (monaco) {
        import('monaco-themes/themes/Monokai Bright.json')
            .then(data => {
            monaco.editor.defineTheme('monokai-bright', data);
            })
            .then(_ => monaco.editor.setTheme('monokai-bright'))
        // monaco.editor.defineTheme("monokai-bright").then(_ => monaco.editor.setMonacoTheme("monokai-bright"));
        }
    }, [monaco,mounted]);
    // let handleChange = (value,event)=>{
    //     console.log(value);
    // }
    useEffect(()=>{
        if(props.language)
        {
            handleLangChange(props.language);
        }
    },[props.language,mounted])
    let handleMount = (editor,monaco)=>{
        props.reference.current = editor;
        setMounted(true);
    }
    let handleLangChange = (language)=>{
        if(monaco && props.reference.current)
        {
            let model = props.reference.current.getModel();
            monaco.editor.setModelLanguage(model,language);
        }
    }
    return(
        <div className={`h-full py-2 ${props.readOnly?'':'outline'} outline-[#ffffff33] rounded-lg overflow-clip`}>
            <Editor
            className="" 
            defaultLanguage="javascript"
            value={props.readOnly?props.code:""}
            onMount={handleMount}
            // onChange={handleChange}
            options={{
                readOnly:props.readOnly
            }}
            />
        </div>
    )
}
TextEditor.defaultProps= {
    readOnly:false,
    language:"javascript"
}