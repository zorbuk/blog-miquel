    // ------------ BLOG ID
    const blogId = document.getElementById('_id').value;

    // ------------ CLICKABLE
    const aModif = document.getElementById('modif');
    const aElim = document.getElementById('elim');

    // ------------ EVENT LISTENERS
    aModif.addEventListener("click", ()=>{
      window.location.href = `/modificar/${blogId}`;
    })
    aElim.addEventListener("click", ()=>{
      axios.delete(`/api/entradas/${blogId}`, {
        data: {}
      }).then(async(data) =>{
        window.location.href = "/"
      });
    })