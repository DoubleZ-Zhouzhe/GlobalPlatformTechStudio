try
{
	bs = GPSystem.getSystemID();
	Print("GPSystem.getSystemID() : " + bs.toString(ASCII));
}
catch (e)
{
	Print("Exception : " + e.className + "," + e.error + "," + e.reason + "," + e.message);
}
