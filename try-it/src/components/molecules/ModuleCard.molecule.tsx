import type { FC } from 'react';
import { useNavigate } from 'react-router-dom';

import { ButtonCard } from '@/components/atoms/ButtonCard.atom';
import type { Module } from '@/types/module.type';

type ModuleCardProps = {
    module: Module;
};

export const ModuleCard: FC<ModuleCardProps> = ({ module }) => {
    const navigate = useNavigate();

    const handleClickModuleCard = () => {
        navigate(module.path);
    };

    return (
        <ButtonCard key={module.path} title={module.title} onClick={handleClickModuleCard}>
            <p className="module-card__description">{module.description}</p>
            <span className="mt-auto self-end">Ver detalle</span>
        </ButtonCard>
    );
};
