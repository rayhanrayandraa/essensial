export async function mockMasyarakatDetail(page) {
    await page.route('**/api/Masyarakats/getMasyarakatDetail*', async route => {
        const response = await route.fetch();
        const json = await response.json();
        
        // Memodifikasi response property 'twoFa' sesuai kebutuhan
        // dan membiarkan response lainnya tetap sama
        json.twoFa = {
            "snoozedAt": "2026-05-11T01:50:21.006Z"
        };
        
        await route.fulfill({
            response,
            json
        });
    });
}
