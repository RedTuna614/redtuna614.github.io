document.getElementById('nav-toggle').addEventListener('change', function()
{
	document.querySelector('main').classList.toggle('hide');
	document.querySelector('footer').classList.toggle('hide');
});
document.addEventListener('DOMContentLoaded', () =>
{
	const navToggle = document.getElementById('nav-toggle');
	if(navToggle) navToggle.checked = false;
	
	document.querySelectorAll('.nav-menu a').forEach(link =>
	{
		link.addEventListener('click', () =>
		{
			document.getElementById('nav-toggle').checked = 			false;
		});
	});
});