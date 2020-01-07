import React from 'react';
import { connect } from 'react-redux';
import {
	Form,
	Input,
	Button,
	AutoComplete,
	Card,
} from 'antd';
import { SelectValue } from 'antd/lib/select';
import { FormComponentProps } from 'antd/lib/form';
import { NewUser } from '../../../models';
import { addUser } from '../../../store';
import './styles.scss';

const AutoCompleteOption = AutoComplete.Option;
interface UserCreateProps {
	create: (user: NewUser) => void;
}

class UserCreate extends React.Component<FormComponentProps & UserCreateProps> {
	state = {
		confirmDirty: false,
		autoCompleteResult: []
	};
	
	handleSubmit = (e: React.FormEvent) => {
		e.preventDefault();
		this.props.form.validateFieldsAndScroll((err, values) => {
			if (!err) {
				const newUser: NewUser = {
					...values,
					imgs: []
				};
				this.props.create(newUser);
			}
		});
	};

	handleWebsiteChange = (value: SelectValue) => {
		let autoCompleteResult: string[];
	  	if (!value) {
			autoCompleteResult = [];
		} else {
			autoCompleteResult = ['.com', '.org', '.net'].map(domain => `${value}${domain}`);
	  	}
	  	this.setState({ autoCompleteResult });
	};

	render() {
		const { getFieldDecorator } = this.props.form;
		const { autoCompleteResult } = this.state;
	
		const formItemLayout = {
			labelCol: {
				xs: { span: 24 },
				sm: { span: 8 },
			},
			wrapperCol: {
				xs: { span: 24 },
				sm: { span: 16 },
			},
		};
		const tailFormItemLayout = {
			wrapperCol: {
				xs: {
					span: 24,
					offset: 0,
				},
				sm: {
					span: 16,
					offset: 8,
				},
			},
		};
		  
		const websiteOptions = autoCompleteResult.map(website => (
			<AutoCompleteOption key={website}>{website}</AutoCompleteOption>
		));

		return (
			<Card className="user-create" style={{margin: 'auto'}}>
				<Form {...formItemLayout} onSubmit={this.handleSubmit}>
					<Form.Item label="Name">
						{getFieldDecorator('name', {
							rules: [{ required: true, message: 'Please input user name.' }],
						})(<Input />)}
					</Form.Item>
					<Form.Item label="Job">
						{getFieldDecorator('job', {
							rules: [{ required: true, message: 'Please input user job.' }],
						})(<Input />)}
					</Form.Item>
					<Form.Item label="Description">
						{getFieldDecorator('description', {
							rules: [{ required: true, message: 'Please input user description.' }],
						})(<Input />)}
					</Form.Item>
					{/* TODO: imgs */}
					<Form.Item label="Repository">
						{getFieldDecorator('repo', {
							rules: [{ required: true, message: 'Please input user website.' }],
						})(
							<AutoComplete
								dataSource={websiteOptions}
								onChange={this.handleWebsiteChange}
								placeholder="www.my-repository.com"
							>
								<Input />
							</AutoComplete>,
						)}
					</Form.Item>
					<Form.Item {...tailFormItemLayout}>
						<Button type="primary" htmlType="submit">
							Create user
						</Button>
					</Form.Item>
				</Form>
			</Card>
		)
	}
}

const UserCreateForm = Form.create({ name: 'create' })(UserCreate);
const mapDispatchToProps = ({
	create: (user: NewUser) => addUser(user)
});

export default connect(null, mapDispatchToProps)(UserCreateForm);
