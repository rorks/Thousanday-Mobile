export default function processGallery(data) {
    let i, images = [];
    for (i= 0; i < data.length; i++) {
        images.push(
            {
                key: "https://thousanday.com/img/pet/" + data[i].pet_id + "/moment/" + data[i].image_name,
                id: data[i].moment_id
            }
        );
    }
    return images;
}
