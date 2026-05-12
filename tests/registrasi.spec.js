import { test, expect } from '../fixtures/auth.fixture';

test.describe('Registrasi Pasien', () => {

    let page;

    test.beforeEach(async ({ loggedInPage }) => {
        page = loggedInPage;
    });

    test('TC01: Registrasi Pasien Baru - Daftar Kunjungan', async () => {
        // 1. Navigasi ke halaman Registrasi via sidebar
        await page.locator('[data-test="sidebar-item-registrasi"]').click();
        await expect(page.getByRole('heading', { name: 'Registration' })).toBeVisible();

        // 2. Buka form Pendaftaran Baru
        // await page.getByRole('button', { name: 'Pendaftaran Baru' }).click();
        // await page.getByText('Daftar Kunjungan').click();

        // // 3. Cari dan pilih pasien
        // await page.getByRole('textbox', { name: 'Cari Nama Lengkap Pasien /' }).fill('Rayhan');
        // await page.getByRole('button', { name: 'rayhan rayandra 08-02-2007,' }).click();

        // // 4. Pilih dokter
        // await page.locator('#select-doctorName').click();
        // await page.getByRole('option', { name: 'drs. David Andyka' }).click();

        // // 5. Simpan pendaftaran
        // await page.getByRole('button', { name: 'Simpan' }).click();

        // // 6. Navigasi ke EMR dan verifikasi pasien terdaftar
        // await page.locator('[data-test="sidebar-item-emr"]').click();
        // await page.locator('[data-test="close-global-tooltip"]').click();
        // await expect(page.getByRole('menuitem', { name: 'rayhan rayandra' })).toBeVisible();
    });

});