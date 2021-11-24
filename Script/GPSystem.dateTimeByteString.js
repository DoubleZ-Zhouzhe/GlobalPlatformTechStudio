try
{
	bs = GPSystem.dateTimeByteString();
	Print("GPSystem.dateTimeByteString() : " + bs.toString(ASCII));
}
catch (e)
{
	Print("Exception : " + e.className + "," + e.error + "," + e.reason + "," + e.message);
}
