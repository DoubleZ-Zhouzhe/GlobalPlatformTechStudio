try
{
	var cry = new Crypto();

	var random = cry.generateRandom(8);
	Print("random : " + random);
}
catch (e)
{
	Print("Exception : " + e.className + "," + e.error + "," + e.reason + "," + e.message);
}
