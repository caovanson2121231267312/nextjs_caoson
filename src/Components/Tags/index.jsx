const Index = () => {
    const COLORS = ['#bbf7d0', '#99f6e4', '#bfdbfe', '#ddd6fe', '#f5d0fe', '#fed7aa', '#fee2e2'];
    const TAGS = ['HTML', 'CSS', 'JavaScript', 'Typescript', 'Tailwind', 'Gatsby', 'UI/UX', 'SVG', 'animation', 'webdev', 'Typescript', 'Typescript', 'Typescript', 'Typescript', 'Typescript', 'Typescript'];
    const DURATION = 30000;
    const rows = 5;
    const TAGS_PER_ROW = 5;

    const random = (min, max) => Math.floor(Math.random() * (max - min)) + min;

    return (
        <div className='app-tags mt-5'>
            <div>
                <h2 className="text-center">Infinite Scroll Animation</h2>
                <p className="text-center">CSS only, content independent, bi-directional, customizable</p>
            </div>
            <div className="container">
                <div className='tag-list'>
                    {[...new Array(rows)].map((_, i) => (
                        <div key={i} className='loop-slider' style={{
                            '--duration': `${DURATION}ms`,
                            '--direction': i % 2 ? 'reverse' : 'normal',
                        }}>
                            <div className='inner'>
                                {
                                    TAGS.map((tag, index) => {
                                        return (
                                            <a className='tag' key={index}><span>#</span> {tag}</a>
                                        );
                                    })
                                }
                            </div>
                        </div>
                    ))}
                    <div className='tag-fade' />
                </div>
            </div>
        </div>
    );
};

export default Index;