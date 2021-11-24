try
{
	var cry = new Crypto();

	var data = new ByteString("1122334455667788", HEX);

	var digestResltSha1 = cry.digest(Crypto.SHA_1,data);
	Print("Sha1 : " + digestResltSha1);
	
	var digestResltMD5 = cry.digest(Crypto.MD5,data);
	Print("MD5 : " + digestResltMD5);
}
catch (e)
{
	Print("Exception : " + e.className + "," + e.error + "," + e.reason + "," + e.message);
}
