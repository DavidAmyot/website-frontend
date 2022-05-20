export async function getRandomUserData() {
    const res = await fetch('https://randomuser.me/api/');
    const json = await res.json();

    return {
        name: `${json.results[0].name.first} ${json.results[0].name.last}`,
        email: json.results[0].email,
        phone: json.results[0].cell,
        gender: json.results[0].gender,
    };
}
