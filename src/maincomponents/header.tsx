import { useState } from 'react';

import CustomColumn from '../components/CustomColumn.tsx'
import CustomRow from '../components/CustomRow.tsx'
import StyledImg from '../components/StyledImg.tsx'
import CustomButton from '../components/CustomButton.tsx'
import CustomDivider from '../components/CustomDivider.tsx'
import Modal from './Modal.tsx';
import Modal_web from './Modal_web.tsx';

function Header() {

	const [isModalOpen, setIsModalOpen] = useState(false);
	const [isWebModalOpen, setIsWebModalOpen] = useState(false);

	const openModal = () => setIsModalOpen(true);
	const closeModal = () => setIsModalOpen(false);

	const openWebModal = () => setIsWebModalOpen(true);
	const closeWebModal = () => setIsWebModalOpen(false);

	const GoGit = () => {
		window.location.href = 'https://github.com/Bewheneverwhatiwant';
	};

	return (
		<CustomColumn $width='100%' $height='auto' $gap='0.5rem' $alignitems='center' $justifycontent='center'>
			<CustomRow $width='100%' $alignitems='center' $justifycontent='space-between'>
				<CustomButton $width='auto' $height='auto' $backgroundColor='transparent' $padding='0' onClick={openWebModal}>
					<StyledImg src={'icon_monitor.png'} $width='2rem' $height='2rem' />
				</CustomButton>

				<CustomRow $width='auto' $gap='1rem'>
					<CustomButton $width='auto' $height='auto' $backgroundColor='transparent' $padding='0' onClick={openModal}>
						<StyledImg src={'icon_namecard.png'} $width='2rem' $height='2rem' />
					</CustomButton>
					<CustomButton $width='auto' $height='auto' $backgroundColor='transparent' $padding='0' onClick={GoGit}>
						<StyledImg src={'icon_github.png'} $width='2rem' $height='2rem' />
					</CustomButton>
				</CustomRow>
			</CustomRow>
			<CustomDivider $width='100%' $height='1px' $backgroundcolor='#D9D9D9' />
			<Modal isOpen={isModalOpen} onClose={closeModal} />
			<Modal_web isOpen={isWebModalOpen} onClose={closeWebModal} />
		</CustomColumn>

	)
}

export default Header
