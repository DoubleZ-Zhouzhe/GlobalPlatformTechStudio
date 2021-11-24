try
{
	bs = GPSystem.getVersion();
	Print("GPSystem.getVersion() : " + bs.toString(ASCII));
}
catch (e)
{
	Print("Exception : " + e.className + "," + e.error + "," + e.reason + "," + e.message);
}
