import { View, Text, TouchableOpacity, Image } from 'react-native';
import { COLORS, SHADOWS, SIZES } from '../constants';

export const FilledButton = ({
	minWidth,
	bg,
	children,
	handlePress,
	...rest
}) => {
	return (
		<TouchableOpacity
			{...rest}
			style={{
				paddingVertical: SIZES.font,
				paddingHorizontal: SIZES.large,
				borderColor: COLORS.primary,
				borderRadius: SIZES.small,
				backgroundColor: bg,
				minWidth: minWidth,
				alignItems: 'center',
				justifyContent: 'center',
			}}
			onPress={handlePress}
		>
			<Text
				style={{
					textTransform: 'uppercase',
					color: COLORS.white,
					fontWeight: 'bold',
				}}
			>
				{children}
			</Text>
		</TouchableOpacity>
	);
};

export const OutlinedButton = ({
	minWidth,
	children,
	handlePress,
	...rest
}) => {
	return (
		<TouchableOpacity
			{...rest}
			style={{
				paddingVertical: SIZES.font,
				paddingHorizontal: SIZES.large,
				borderWidth: SIZES.extraSmall,
				borderColor: COLORS.primary,
				borderRadius: SIZES.small,
				minWidth: minWidth,
				alignItems: 'center',
				justifyContent: 'center',
			}}
			onPress={handlePress}
		>
			<Text
				style={{
					textTransform: 'uppercase',
					fontWeight: 'bold',
					color: COLORS.primary,
				}}
			>
				{children}
			</Text>
		</TouchableOpacity>
	);
};

export const TextButton = ({ minWidth, children, handlePress, ...rest }) => {
	return (
		<TouchableOpacity
			{...rest}
			style={{
				paddingVertical: SIZES.font,
				paddingHorizontal: SIZES.large,
				minWidth: minWidth,
				alignItems: 'center',
				justifyContent: 'center',
				backgroundColor: 'rgba(150, 150, 150, 0.2)',
			}}
			onPress={handlePress}
		>
			<Text
				style={{
					fontWeight: '900',
					color: COLORS.primary,
					textTransform: 'uppercase',
				}}
			>
				{children}
			</Text>
		</TouchableOpacity>
	);
};

export const AuthButton = ({
	minWidth,
	bg,
	children,
	handlePress,
	...rest
}) => {
	return (
		<TouchableOpacity
			{...rest}
			style={{
				paddingVertical: SIZES.large,
				paddingHorizontal: SIZES.large,
				borderColor: COLORS.primary,
				borderTopLeftRadius: SIZES.large + 8,
				borderTopRightRadius: SIZES.large + 8,
				backgroundColor: bg,
				minWidth: minWidth,
				alignItems: 'center',
				justifyContent: 'center',
			}}
			onPress={handlePress}
		>
			<Text
				style={{
					textTransform: 'uppercase',
					color: COLORS.white,
					fontWeight: 'bold',
				}}
			>
				{children}
			</Text>
		</TouchableOpacity>
	);
};

export const CircleButton = ({ imgUrl, handlePress, ...props }) => {
	return (
		<TouchableOpacity
			style={{
				width: 40,
				height: 40,
				backgroundColor: COLORS.secondary,
				borderRadius: SIZES.extraLarge,
				alignItems: 'center',
				justifyContent: 'center',
				...SHADOWS.light,
				...props,
			}}
			onPress={handlePress}
		>
			<Image
				source={imgUrl}
				resizeMode="contain"
				style={{ width: 24, height: 24 }}
			/>
		</TouchableOpacity>
	);
};
