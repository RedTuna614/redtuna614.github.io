export function showCodeSection(sectId)
{
	const codeSnippets = document.getElementsByClassName('codeSect');
	let isShown = document.getElementById(sectId).classList.contains('show');
	for(let snippet of codeSnippets)
	{
		snippet.classList.remove('show');
	}
	if(!isShown)
	{
		document.getElementById(sectId).classList.toggle('show');
	}
}
function showCode(target)
{
	const buttons = document.querySelectorAll('.codetab');
  	const codeBlocks = document.querySelectorAll('.code');
	const btnText = document.querySelectorAll('.tabText');	

	// Hide all code blocks
   	codeBlocks.forEach(block => block.classList.remove('show'));
	btnText.forEach(button => button.classList.remove('select'));

   	// Show only the matching one
   	const targetBlock = document.querySelector(`.code[data-target="${target}"]`);
   	if (targetBlock) targetBlock.classList.add('show');

	const text = document.querySelector(`.tabText[data-target="${target}"]`);
	if(text) text.classList.add('select');
	
}
function openProject(path)
{
	window.location.href=path;
}

document.addEventListener('DOMContentLoaded', () => {
	const buttons = document.querySelectorAll('.codetab');
  	const codeBlocks = document.querySelectorAll('.code');
	// Add click listeners to all buttons
  	buttons.forEach(btn => {
    		btn.addEventListener('click', () => {
     		showCode(btn.dataset.target);
   		});
  	});

  // Show Header by default
  showCode('header');
});