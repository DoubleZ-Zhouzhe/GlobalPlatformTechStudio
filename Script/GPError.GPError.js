try
{
	//throw new GPError("TestClassName",GPError.DATA_TOO_LARGE,0,"TestMessage");

	var ge1 = new GPError("TestClassName1",0,1,"TestMessage1");

	var ge2 = new GPError("TestClassName2",1,2,"TestMessage2");

	Print("Print 1:" + ge1.name + "," + ge1.className + "," + ge1.error + "," + ge1.reason + "," + ge1.message);

	Print("Print 2:" + ge2.name + "," + ge2.className + "," + ge2.error + "," + ge2.reason + "," + ge2.message);

	throw ge2;
}
catch (e)
{
	Print("Exception:" + e.name + "," + e.className + "," + e.error + "," + e.reason + "," + e.message);
}
