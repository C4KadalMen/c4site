let x1 = document.getElementById("bil1");
let x2 = document.getElementById("bil2");

function cetak()
{
	let bil1 = Number(x1.value);
	let bil2 = Number(x2.value);
	let hasil = bil1 + bil2;
	alert("Hasilnya : " + hasil);
}
