try
{
	GPSystem.trace("wait 2000 ms start...........");
	GPSystem.wait(2000);
	GPSystem.trace("wait 2000 ms end...........");
}
catch (e)
{
	Print("Exception : " + e.className + "," + e.error + "," + e.reason + "," + e.message);
}
