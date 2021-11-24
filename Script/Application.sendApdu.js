try
{
	var app = new Application();

	//Card reset
	atr = app.card.reset(Card.RESET_WARM);
	
	//APDU cla ins p1 p2
	rsp = app.sendApdu(0x00,0xA4,0x04,0x00);

	//APDU cla ins p1 p2 sw[]
	rsp = app.sendApdu(0x00,0xA4,0x04,0x00,[0x9000,0x6A82]);

	//APDU cla ins p1 p2 data
	rsp = app.sendApdu(0x00,0xA4,0x04,0x00,new ByteString('A000000333010102', HEX));
	
	//APDU cla ins p1 p2 data sw[]
	rsp = app.sendApdu(0x00,0xA4,0x04,0x00,new ByteString('A000000333010102', HEX),[0x9000,0x6A82]);
	
	//APDU cla ins p1 p2 le
	rsp = app.sendApdu(0x00,0xA4,0x04,0x00,0x01);

	//APDU cla ins p1 p2 le sw[]
	rsp = app.sendApdu(0x00,0xA4,0x04,0x00,0x01,[0x9000,0x6A82,0x6999]);

	//APDU cla ins p1 p2 data le
	rsp = app.sendApdu(0x00,0xA4,0x04,0x00,new ByteString('A000000333010102', HEX),0x00);
	
	//APDU cla ins p1 p2 data le sw[]
	rsp = app.sendApdu(0x00,0xA4,0x04,0x00,new ByteString('A000000333010102', HEX),0x01,[0x9000,0x6A82]);
}
catch (e)
{
	Print("Exception : " + e.className + "," + e.error + "," + e.reason + "," + e.message);
}
