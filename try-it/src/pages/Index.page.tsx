import { useNavigate } from 'react-router-dom';

import { Card, CardDescription, CardHeader, CardTitle } from '@/components/atoms/Card.atom';
import { modules } from '@/constants/modules';

const IndexPage = () => {
    const navigate = useNavigate();
    return (
        <div className="index">
            {modules.map((module) => (
                <Card key={module.path} className="w-[300px]" onClick={() => navigate(module.path)}>
                    <CardHeader>
                        <CardTitle>{module.title}</CardTitle>
                        <CardDescription>{module.description}</CardDescription>
                    </CardHeader>
                </Card>
            ))}
        </div>
    );
};

export default IndexPage;
