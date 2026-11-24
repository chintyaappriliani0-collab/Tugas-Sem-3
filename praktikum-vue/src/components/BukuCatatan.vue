<script setup>
import { ref, computed } from 'vue';

// State untuk form input
const judul = ref('');
const kategori = ref('Fiksi');
const sudahDibaca = ref(false);

// Daftar buku awal
const daftarBuku = ref([
  { id: 1, judul: 'Clean Code', kategori: 'Teknologi', selesai: true },
  { id: 2, judul: 'Laut Bercerita', kategori: 'Fiksi', selesai: false }
]);

// Fungsi menambah buku ke daftar
const tambahBuku = () => {
  if (!judul.value.trim()) return;

  daftarBuku.value.push({
    id: Date.now(),
    judul: judul.value.trim(),
    kategori: kategori.value,
    selesai: sudahDibaca.value
  });

  // Reset form setelah ditambahkan
  judul.value = '';
  kategori.value = 'Fiksi';
  sudahDibaca.value = false;
};

// Computed property untuk menghitung jumlah buku yang sudah selesai dibaca
const jumlahSelesaiDibaca = computed(() => {
  return daftarBuku.value.filter((buku) => buku.selesai).length;
});
</script>

<template>
  <div class="container">
    <h1>Buku Catatan Bacaan</h1>

    <!-- Form Input -->
    <form @submit.prevent="tambahBuku" class="form-buku">
      <div class="field">
        <label for="judul">Judul Buku:</label>
        <input
          id="judul"
          v-model="judul"
          type="text"
          placeholder="Masukkan judul buku..."
          required
        />
      </div>

      <div class="field">
        <label for="kategori">Kategori:</label>
        <select id="kategori" v-model="kategori">
          <option value="Fiksi">Fiksi</option>
          <option value="Non-Fiksi">Non-Fiksi</option>
          <option value="Teknologi">Teknologi</option>
          <option value="Sains">Sains</option>
        </select>
      </div>

      <div class="field checkbox-field">
        <input id="status" v-model="sudahDibaca" type="checkbox" />
        <label for="status">Sudah selesai dibaca</label>
      </div>

      <button type="submit">Tambah Buku</button>
    </form>

    <!-- Ringkasan dari Computed Property -->
    <div class="ringkasan">
      Selesai dibaca: <strong>{{ jumlahSelesaiDibaca }}</strong> dari
      <strong>{{ daftarBuku.length }}</strong> buku
    </div>

    <!-- Daftar Buku dengan v-for -->
    <ul class="daftar-buku">
      <li v-for="buku in daftarBuku" :key="buku.id" class="item-buku">
        <div class="info">
          <span :class="{ coret: buku.selesai }">{{ buku.judul }}</span>
          <small class="badge">{{ buku.kategori }}</small>
        </div>
        <label class="toggle-status">
          <input type="checkbox" v-model="buku.selesai" />
          {{ buku.selesai ? 'Selesai' : 'Belum' }}
        </label>
      </li>
    </ul>
  </div>
</template>

<style scoped>
.container {
  max-width: 480px;
  margin: 40px auto;
  padding: 24px;
  font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
  border: 1px solid #e2e8f0;
  border-radius: 12px;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.06);
  background: #ffffff;
  color: #1e293b;
}

h1 {
  font-size: 1.4rem;
  text-align: center;
  margin-bottom: 20px;
}

.form-buku {
  display: flex;
  flex-direction: column;
  gap: 12px;
  margin-bottom: 20px;
}

.field {
  display: flex;
  flex-direction: column;
  gap: 4px;
}

.field input[type="text"],
.field select {
  padding: 9px 12px;
  border: 1px solid #cbd5e1;
  border-radius: 6px;
  font-size: 0.95rem;
}

.checkbox-field {
  flex-direction: row;
  align-items: center;
  gap: 8px;
}

button {
  padding: 10px;
  background-color: #42b883;
  color: white;
  border: none;
  border-radius: 6px;
  font-weight: 600;
  cursor: pointer;
}

button:hover {
  background-color: #369f70;
}

.ringkasan {
  background-color: #f1f5f9;
  padding: 10px 14px;
  border-radius: 8px;
  margin-bottom: 16px;
  font-size: 0.95rem;
  text-align: center;
}

.daftar-buku {
  list-style: none;
  padding: 0;
  margin: 0;
  display: flex;
  flex-direction: column;
  gap: 10px;
}

.item-buku {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 12px;
  border: 1px solid #e2e8f0;
  border-radius: 8px;
}

.info {
  display: flex;
  flex-direction: column;
  gap: 4px;
}

.coret {
  text-decoration: line-through;
  color: #94a3b8;
}

.badge {
  display: inline-block;
  width: fit-content;
  background-color: #e0f2fe;
  color: #0369a1;
  padding: 2px 8px;
  border-radius: 4px;
  font-size: 0.78rem;
  font-weight: 600;
}

.toggle-status {
  display: flex;
  align-items: center;
  gap: 6px;
  font-size: 0.88rem;
  cursor: pointer;
}
</style>