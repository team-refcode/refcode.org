var sections = document.querySelectorAll(".expandingSection");
sections.forEach(function(section){
  section.addEventListener("click", function(e){
    if(e.target.classList.contains("expandingSection-row1") || e.target.classList.contains("expandingSection-arrow")|| e.target === e.currentTarget){
      e.currentTarget.classList.toggle("expanded");
    }
  });
});

var topRows = document.querySelectorAll(".expandingSection-row1");
topRows.forEach(function(row){
  row.addEventListener("mouseover", function(e){
      e.currentTarget.parentElement.classList.add("expandingSection-active");
  });
  row.addEventListener("mouseleave", function(e){
      e.currentTarget.parentElement.classList.remove("expandingSection-active");
  });
})