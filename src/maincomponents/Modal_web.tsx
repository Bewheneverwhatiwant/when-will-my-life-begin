import React, { MouseEventHandler } from 'react';
import styled from 'styled-components';

import CustomFont from '../components/CustomFont';
import CustomButton from '../components/CustomButton';
import CustomRow from '../components/CustomRow';
import CustomBox from '../components/CustomBox';
import CustomColumn from '../components/CustomColumn';

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
    background-color: white;
    width: 90%;
    height: auto;
	padding: 1rem;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    border-radius: 8px;
    z-index: 1001;
    gap: 3rem;
`;

interface ModalProps {
	isOpen: boolean;
	onClose: MouseEventHandler<HTMLDivElement>;
}

const Modal_web: React.FC<ModalProps> = ({ isOpen, onClose }) => {
	// 모달이 열려있을 때만 렌더링
	if (!isOpen) return null;

	const url = 'https://leenayeong.vercel.app/';

	const handleCopyToClipboard = () => {
		navigator.clipboard.writeText(url).then(
			() => {
				alert('주소가 클립보드에 복사되었습니다!');
			},
			() => {
				alert('클립보드 복사에 실패했습니다.');
			}
		);
	};

	return (
		<ModalOverlay onClick={onClose}>
			<ModalContainer onClick={(e) => e.stopPropagation()}>

				<CustomColumn $width='100%' $alignitems='flex-start' $justifycontent='center' $gap='0.5rem'>
					<CustomFont $color='black' $font='0.8rem'>데스크톱에서 이력서를 더 넓게 보실 수 있습니다.</CustomFont>
					<CustomFont $color='black' $font='0.8rem'>아래 주소를 복사하여 브라우저에서 검색해주세요.</CustomFont>
					<CustomFont $color='black' $font='0.8rem'>이 주소는 모바일에서는 접속이 불가합니다!</CustomFont>
				</CustomColumn>

				<CustomRow $width='100%' $alignitems='center' $justifycontent='space-between' $gap='1rem'>
					<CustomBox $width='80%' $height='auto' $backgroundcolor='transparent' $border='1px solid black'
						$alignitems='center' $justifycontent='center' $padding='0.5rem' $overflowx='hidden'>
						<CustomFont $color='black' $font='0.8rem'>{url}</CustomFont>
					</CustomBox>

					<CustomButton $width='20%' $height='auto' $padding='0.5rem' $backgroundColor='blue' onClick={handleCopyToClipboard}>
						<CustomFont $color='white' $font='0.8rem'>복사</CustomFont>
					</CustomButton>
				</CustomRow>
			</ModalContainer>
		</ModalOverlay>
	);
};

export default Modal_web;