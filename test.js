setTimeout(test, 1000);


function test()
{
	document.title = "LOL!"

	const elements = document.getElementsByClassName('css-901oao css-16my406 r-poiln3 r-bcqeeo r-qvutc0');

	for (let i = 0; i < elements.length; i++)
	{
		elements[i].innerHTML = '<b>' + elements[i].innerHTML + '</b>';
		//elements[i].innerHTML = "stfu";
	}
	setTimeout(test, 1000);
}