// file Input 

const file=document.getElementById("file");
const filetype=document.getElementById('filetype');
const filename=document.getElementById('filename');
const filedata=document.getElementById('filedata');
file.addEventListener("change",(e)=>{
    const file=e.target.files[0];
    const reader = new FileReader();
    reader.onload = (e) => {
        const data = e.target.result;
        console.log(data);
        const array=data.split(',');
        console.log(array);

        const MIMEtype=array[0].split(':')[1].split(';')[0];
        filetype.value=MIMEtype;
        console.log(MIMEtype);

        const FileData=array[1];
        filedata.value=FileData;
        console.log(FileData);

    }
    reader.readAsDataURL(file);
    filename.value=file.name;
    console.log(filename.value);
})



// form submit logic

const form =document.getElementById("form");
const ScriptUrl="https://script.google.com/macros/s/AKfycbwv9y8oh-kFczcwkcdYU22Krz7kBDNCABOH12d5tcVMwHEt8AeCLXj9xYCV684pTzhsuw/exec"
form.addEventListener("submit",async(e)=>{
    e.preventDefault();
    const formData = new FormData(form);
    console.log("Name :",formData.get("Name"));
    console.log("Email :",formData.get("Email"));
    console.log("Subject :",formData.get("Subject"));
    console.log("FileType :",formData.get("FileType"));
    console.log("FileName :",formData.get("FileName"));
    console.log("FileData :",formData.get("FileData"));
    const response =await fetch(ScriptUrl,{
        method : "POST",
        body : formData,
    })
    const text=await response.text();
    console.log(text);
    if (text==="Submission successful!"){
        window.alert("Form Submitted Successfully!")
        form.reset();
    }
})