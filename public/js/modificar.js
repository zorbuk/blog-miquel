    // ------------ BLOG ID
    const blogId = document.getElementById('bid').value;
    
    // ------------ VALUES
    const title = document.getElementById('title').value;
    const snippet = document.getElementById('snippet').value;
    const bodyBlog = document.getElementById('body').value;

    // ------------ CLICKABLE
    const aSubmit = document.getElementById('submit');

    // ------------ EVENT LISTENERS
    aSubmit.addEventListener("click", ()=>{
      axios.patch(`/api/entradas/${blogId}`, data={
        "title":title,
        "snippet":snippet,
        "body": bodyBlog
    }).then(async(data) =>{
        if(data['data']['updated']){
            window.location.href = `/blog/${blogId}`
        }else alert(data['data'])
      });
    })