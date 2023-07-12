import fs from 'fs/promises';

const handlingJsonFiles = async () => {
    try {
        const dataArr = [];
        const allPpl = [];

        const fileNames = ['ids-to-cities.json', 'ids-to-grades.json', 'ids-to-names.json'];

        for ( const fileName of fileNames) {
            const fileData = await fs.readFile(`In class activity/template/data/${fileName}`, 'utf-8');

            dataArr.push(JSON.parse(fileData));
        }

        const numOfPpl = dataArr[0][dataArr[0].length - 1].id;
        
        const concatData = dataArr.reduce((acc, element) => {
           
            return acc.concat(element);
        }, []);

        for ( let i = 1; i <= numOfPpl; i++) {
            const filtered = concatData.filter(x => x.id === i);
            
            allPpl.push({id: filtered[0].id, name: filtered[2].name, city: filtered[0].city, grades: filtered[1].grades});
        }

        await fs.writeFile('In class activity/template/data/student-data.json', JSON.stringify(allPpl, '\n', 2), 'utf-8');
    } catch (err) {
        console.log(err);
    }
}

handlingJsonFiles();