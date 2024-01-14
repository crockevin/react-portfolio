const projects = [
    { id: 1, name: 'Weather Forecast', imgPath: 'https://raw.githubusercontent.com/crockevin/weather-app/main/Screenshot%202023-10-03%20215516.png', link: 'https://crockevin.github.io/weather-app/', codeUsed: 'Html, css, jquery' },
    { id: 2, name: 'Tech blog', imgPath: '', link: 'https://ucf-tech-blog-af225d7f8a74.herokuapp.com/', codeUsed: 'Html, css, js, express, node js, mysql' },
    { id: 3, name: 'Get fitter', imgPath: '', link: 'https://get-fitter-e98ef4b65ec3.herokuapp.com/', codeUsed: 'Html, css, js, express, node js, mysql' }]



export default function Repos() {
    return (
        <>
            {projects.map(item => (
                <div>{item.name} <a href={item.link} target="_blank" rel="noreferrer"><img src={item.imgPath}/>Visit here</a></div>
            ))}
        </>
    )

}