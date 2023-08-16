const butInstall = document.getElementById('buttonInstall');

// Logic for installing the PWA
// TODO: Add an event handler to the `beforeinstallprompt` event
window.addEventListener('beforeinstallprompt', (e) => {
    e.preventDefault();
  butInstall.style.visibility = 'visible';


  butInstall.addEventListener('click', async () => {
    e.prompt();
    butInstall.setAttribute('disabled', true);
    butInstall.textContent = 'Installed!';
  });
});

// TODO: Implement a click event handler on the `butInstall` element



// TODO: Add an handler for the `appinstalled` event
window.addEventListener('appinstalled', (event) => {
    butInstall.textContent = 'Installed!';
    console.log('👍', 'appinstalled', event);
});
