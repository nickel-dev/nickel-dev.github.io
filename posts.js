var url = window. location. pathname;
var filename = url.substring(url.lastIndexOf('/') + 1);

const footer = '<div id="footnote"><hr><h3>Contacts:</h3><a href="https://github.com/nickel-dev">Github</a> | <a href="https://youtube.com/@cozyfog">Youtube</a> | <a href="mailto: nickel-dev@proton.me">nickel-dev@proton.me</a></div>'

function generate_header()
{
  let path = url.split('/');
  path = path[path.length - 2];
  console.log(path);
  if (path == 'posts')
    path += '/';
  else
    path = ''
  let header = '<a href="https://github.com/nickel-dev/nickel-dev.github.io/blob/main/' + path + filename + '">source</a>';
  let name = filename.split('_').join(' ').replace('.html', '');
  const date = name.substring(0, name.lastIndexOf('-'));
  name = name.substring(name.lastIndexOf('-') + 1);
  return '<title>' + date + ' - ' + name + '</title><i>' + date + '</i><h1>' + name + '</h1><a href="../"><< Back</a><hr>' + header + '	<select name="themes" id="themes"><option value="dark">dark</option><option value="raw">raw</option><option value="none">none</option></select>'
}

function remove_new_line(name)
{
  const code = document.querySelectorAll(name);
  [...code].forEach(el => el.textContent = el.textContent.replace(/^\n/,'').replace(/^\s+|\s+$/g, ""));
}

function generate_page()
{
  const header = generate_header();
  let body = document.getElementsByTagName("body")[0];

  remove_new_line('pre code');

  body.innerHTML = header + body.innerHTML + footer;

  document.getElementById('themes').addEventListener('change', function () {
    let styles = document.getElementsByTagName('link');
    switch (this.value) {
      case "raw":
      styles[0].disabled = true;
      styles[1].disabled = false;
      break;

      case "none":
      styles[0].disabled = true;
      styles[1].disabled = true;
      break;

      default:
      case "dark":
      styles[0].disabled = false;
      styles[1].disabled = false;
      break;
    }
  });
}