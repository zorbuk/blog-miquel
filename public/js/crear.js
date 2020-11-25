    // ------------ BLOG ID
    // const blogId = document.getElementById('bid').value;

    // ------------ VALUES
    let _title, _snippet, _bodyBlog

    // ------------ CLICKABLE
    const aSubmit = document.getElementById('submit');

    // ------------ EVENT LISTENERS
    aSubmit.addEventListener("click", ()=>{
        _title = document.getElementById('title').value;
        _snippet = document.getElementById('snippet').value;
        _bodyBlog = document.getElementById('body').value;

      axios.post(`/api/entradas`, {
        "title": _title,
        "snippet": _snippet,
        "body": _bodyBlog
        });
    })