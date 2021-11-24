try
{
	var app = new GPApplication();
	
	//Card reset
	atr = app.card.reset(Card.RESET_WARM);
	
	//Get Data
	da = app.getData(0x66);
	Print("Tag 66 : " + da.toString(HEX));
	
	//Get Data sw
	da = app.getData(0x66,[0x9000]);
	Print("Tag 66 : " + da.toString(HEX));
}
catch (e)
{
	Print("Exception : " + e.className + "," + e.error + "," + e.reason + "," + e.message);
}
