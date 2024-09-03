function scrollToSection(sectionId) {
  document.getElementById(sectionId).scrollIntoView({ behavior: 'smooth' });
}


        function showSidebar(){
  const sidebar = document.querySelector('.Slider')
  sidebar.style.display = 'flex'
}
function hideSidebar(){
  const sidebar = document.querySelector('.Slider')
  sidebar.style.display = 'none'
}

var typed2 = new Typed('.text-slider', {
  strings: ['Frontend Developer', 'YouTuber', 'Software Development','UV / UX Diginer','Programer'],
typeSpeed: 50,
backSpeed: 25,      
backDelay: 1000,     
fadeOut: true,      
fadeOutDelay: 500,
loop: true           
});
document.getElementById('downloadButton').addEventListener('click', function() {
var fileUrl = 'resume.pdf';
var a = document.createElement('a');
  a.href = fileUrl;
  a.download = fileUrl.split('/').pop();
  document.body.appendChild(a);
  a.click();
  document.body.removeChild(a);
});
document.getElementById('Codesoftlatter').addEventListener('click', function() {
  var fileUrl = 'codesoftlatter.jpeg';
  var a = document.createElement('a');
    a.href = fileUrl;
    a.download = fileUrl.split('/').pop();
    document.body.appendChild(a);
    a.click();
    document.body.removeChild(a);
  });
  document.getElementById('Certificate').addEventListener('click', function() {
    var fileUrl = 'codesoftcertfiate.jpeg';
    var a = document.createElement('a');
      a.href = fileUrl;
      a.download = fileUrl.split('/').pop();
      document.body.appendChild(a);
      a.click();
      document.body.removeChild(a);
    });
  document.getElementById('Certificate').addEventListener('click', function() {
    var fileUrl = 'certfilye.jpeg';
    var a = document.createElement('a');
      a.href = fileUrl;
      a.download = fileUrl.split('/').pop();
      document.body.appendChild(a);
      a.click();
      document.body.removeChild(a);
    });
  
        document.getElementById('contactForm').addEventListener('submit', function(event) {
          event.preventDefault(); // Prevent the default form submission

          // Simulate a successful form submission
          // In a real-world scenario, you would submit the form data via an AJAX request

          document.getElementById('formSection').classList.add('hidden');
          document.getElementById('thankYouMessage').classList.remove('hidden');
      });

      document.getElementById('Certificate1').addEventListener('click', function() {
        var fileUrl = 'codesoftlatter.jpeg';
        var a = document.createElement('a');
          a.href = fileUrl;
          a.download = fileUrl.split('/').pop();
          document.body.appendChild(a);
          a.click();
          document.body.removeChild(a);
        });
      document.getElementById('Certificate1').addEventListener('click', function() {
        var fileUrl = 'codesoftcertfiate.jpeg';
        var a = document.createElement('a');
          a.href = fileUrl;
          a.download = fileUrl.split('/').pop();
          document.body.appendChild(a);
          a.click();
          document.body.removeChild(a);
        });


        document.getElementById('Codetechlatter').addEventListener('click', function() {
          var fileUrl = 'code-latter.jpeg';
          var a = document.createElement('a');
            a.href = fileUrl;
            a.download = fileUrl.split('/').pop();
            document.body.appendChild(a);
            a.click();
            document.body.removeChild(a);
          });