
function getStatusBarFromWhatsAppWeb(){ 
	return new Promise(resolve => {
		setTimeout(() => {
			resolve(document.querySelector("._26lC3")) // Header class of status bar
		}, 3000)
	})
}

async function hiddenStatus(){
	const status = await getStatusBarFromWhatsAppWeb();
	
	if (status.style.display !== "none") status.style.display = "none";

}

hiddenStatus()
