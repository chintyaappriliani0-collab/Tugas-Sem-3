// 1. Array of objects berisi 6 data transaksi belanja
const transaksi = [
  { id: 1, barang: "Buku Tulis", harga: 5000, qty: 3, kategori: "Alat Tulis" },
  { id: 2, barang: "Pensil 2B", harga: 2000, qty: 5, kategori: "Alat Tulis" },
  { id: 3, barang: "Penghapus", harga: 1500, qty: 2, kategori: "Alat Tulis" },
  { id: 4, barang: "Kopi Sachet", harga: 3000, qty: 4, kategori: "Makanan & Minuman" },
  { id: 5, barang: "Roti Tawar", harga: 12000, qty: 1, kategori: "Makanan & Minuman" },
  { id: 6, barang: "Air Mineral", harga: 4000, qty: 2, kategori: "Makanan & Minuman" }
];

console.log("=== DATA AWAL TRANSAKSI ===");
console.log(transaksi);

// 2. Menggunakan filter() dengan Arrow Function & Destructuring untuk menyaring kategori tertentu
const kategoriDicari = "Alat Tulis";
const hasilFilter = transaksi.filter(({ kategori }) => kategori === kategoriDicari);

console.log(`\n=== 1. FILTER: Kategori '${kategoriDicari}' ===`);
console.log(hasilFilter);

// 3. Menggunakan map() dengan Arrow Function & Destructuring untuk menghitung subtotal tiap barang
const dataDenganSubtotal = transaksi.map(({ id, barang, harga, qty, kategori }) => ({
  id,
  barang,
  harga,
  qty,
  kategori,
  subtotal: harga * qty
}));

console.log("\n=== 2. MAP: Menambahkan Subtotal Tiap Barang ===");
console.log(dataDenganSubtotal);

// 4. Menggunakan reduce() dengan Arrow Function & Destructuring untuk menghitung total keseluruhan
const totalKeseluruhan = dataDenganSubtotal.reduce((acc, { subtotal }) => acc + subtotal, 0);

console.log("\n=== 3. REDUCE: Total Keseluruhan Belanja ===");
console.log(`Rp ${totalKeseluruhan.toLocaleString('id-ID')}`);