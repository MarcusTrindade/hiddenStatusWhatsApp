
function getStatusBarFromWhatsAppWeb(){ 
	return new Promise(resolve => {
		setTimeout(() => {
			resolve(document.querySelector('div[aria-label="Status"]')) // Header class of status bar
		}, 5000)
	})
};

async function hiddenStatus(){
	const status = await getStatusBarFromWhatsAppWeb();
	
	if (status.style.display !== "none") {
		status.style.display = "none";
	} else if (status.style.display === undefined) {
		status = await getStatusBarFromWhatsAppWeb();
	}

}

hiddenStatus();
