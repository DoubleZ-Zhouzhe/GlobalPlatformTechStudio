try
{
	bs = GPSystem.dateTimeByteString();
	Print("Start Time : " + bs.toString(ASCII));
	
	GPSystem.wait(2000);
	
	bs = GPSystem.dateTimeByteString();
	Print("End Time : " + bs.toString(ASCII));
}
catch (e)
{
	Print("Exception : " + e.className + "," + e.error + "," + e.reason + "," + e.message);
}
