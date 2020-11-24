    // ------------ BLOG ID
    const blogId = document.getElementById('bid').value;
    
    // ------------ VALUES
    const title = document.getElementById('title').value;
    const snippet = document.getElementById('snippet').value;
    const bodyBlog = document.getElementById('body').value;

    // ------------ CLICKABLE
    const aSubmit = document.getElementById('submit');

    // ------------ EVENT LISTENERS
    aSubmit.addEventListener("click", async ()=>{
        const body = {
            title,
            snippet,
            body: bodyBlog
        }
      await axios.patch(`/api/entradas/${blogId}`, body).then((data) =>{
        window.location.href = `/blog/${blogId}`
      });
    })