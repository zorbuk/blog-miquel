    // ------------ BLOG ID
    const blogId = document.getElementById('bid').value;
    
    // ------------ VALUES
    const _title = document.getElementById('title').value;
    const _snippet = document.getElementById('snippet').value;
    const _bodyBlog = document.getElementById('body').value;

    // ------------ CLICKABLE
    const aSubmit = document.getElementById('submit');

    // ------------ EVENT LISTENERS
    aSubmit.addEventListener("click", ()=>{
      axios.patch(`/api/entradas/${blogId}`, data={"title":_title}).then(async(data) =>{
        if(data['data']['updated']){
            window.location.href = `/blog/${blogId}`
        }else alert(data['data'])
      });
    })