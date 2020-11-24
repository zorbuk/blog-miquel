    // ------------ BLOG ID
    const blogId = document.getElementById('_id').value;
    
    // ------------ VALUES
    const title = document.getElementById('title').value;
    const snippet = document.getElementById('snippet').value;
    const body = document.getElementById('body').value;

    // ------------ CLICKABLE
    const aSubmit = document.getElementById('submit');

    // ------------ EVENT LISTENERS
    aSubmit.addEventListener("click", ()=>{
      axios.patch(`/api/entradas/${blogId}`, {
        data: {
            "title":title,
            "snippet":snippet,
            "body":body
        }
      }).then(async(data) =>{
        window.location.href = "/"
      });
    })