import React, { MouseEventHandler } from 'react';
import styled from 'styled-components';

import CustomFont from '../components/CustomFont';
import CustomButton from '../components/CustomButton';
import CustomRow from '../components/CustomRow';
import StyledImg from '../components/StyledImg';
import { MdDownload } from "react-icons/md";

const ModalOverlay = styled.div`
    position: fixed;
	top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    width: 420px;
    height: 100vh;
    background-color: rgba(0, 0, 0, 0.5);
    display: flex;
    justify-content: center;
    align-items: center;
    z-index: 1000;
`;

const ModalContainer = styled.div`
    background-color: transparent;
    width: 90%;
    height: auto;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    border-radius: 8px;
    z-index: 1001;
    gap: 1rem;
`;

interface ModalProps {
	isOpen: boolean;
	onClose: MouseEventHandler<HTMLDivElement>;
}

const Modal: React.FC<ModalProps> = ({ isOpen, onClose }) => {
	// 모달이 열려있을 때만 렌더링
	if (!isOpen) return null;

	const handleDownload = () => {
		const link = document.createElement('a');
		link.href = '/NameCard_NY.png';
		link.download = '이나영의 명함.png';
		document.body.appendChild(link);
		link.click();
		document.body.removeChild(link);
	};

	return (
		<ModalOverlay onClick={onClose}>
			<ModalContainer onClick={(e) => e.stopPropagation()}>
				<CustomButton $backgroundColor='transparent' onClick={handleDownload}>
					<CustomRow>
						<CustomFont $color='white' $font='1rem' $fontweight='bold'>Download</CustomFont>
						<MdDownload style={{ color: 'white', fontSize: '1rem' }} />
					</CustomRow>
				</CustomButton>
				<StyledImg src={'NameCard_NY.png'} $width='100%' />
			</ModalContainer>
		</ModalOverlay>
	);
};

export default Modal;