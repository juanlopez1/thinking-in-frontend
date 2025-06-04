import { modules } from '@/constants/modules';
import { ModuleCard } from '@/components/molecules/ModuleCard.molecule';

const IndexPage = () => (
    <div className="index__container">
        {modules.map((module) => (
            <ModuleCard key={module.path} module={module} />
        ))}
    </div>
);

export default IndexPage;
