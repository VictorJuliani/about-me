import React from 'react';
import { Upload, Icon, Modal } from 'antd';
import { UploadFile } from 'antd/lib/upload/interface';

function getBase64(file: Blob | File): Promise<any> {
	return new Promise((resolve, reject) => {
		const reader = new FileReader();
		reader.readAsDataURL(file);
		reader.onload = () => resolve(reader.result);
		reader.onerror = error => reject(error);
	});
}

interface PicturesWallProps {
    fileList?: any[];
    onChange?: (fileList: any[]) => void;
}

export default class PicturesWall extends React.Component<PicturesWallProps> {
    state = {            
        previewVisible: false,
        previewImage: '',
        fileList: [] as any[]
    };

    constructor(props: PicturesWallProps) {
        super(props);
        if (this.props.fileList) {
            this.state.fileList = this.props.fileList;
        }
    }

    componentDidUpdate(prevProps: PicturesWallProps) {
        // Should be a controlled component.
        if ('fileList' in this.props && prevProps.fileList !== this.props.fileList) {
            const fileList = this.props.fileList || [];
            this.setState(fileList);
        }
    }

    handleCancel = () => this.setState({ previewVisible: false });

    handlePreview = async (file: UploadFile<any>) => {
        if (!file.url && !file.preview && file.originFileObj) {
            file.preview = await getBase64(file.originFileObj);
        }

        this.setState({
            previewImage: file.url || file.preview,
            previewVisible: true,
        });
    };

    handleChange = ({ fileList }: { fileList: any[] }) => {
        this.setState({ fileList });
        const onChange = this.props.onChange;
        if (onChange) {
            onChange(fileList);
        }
    }

    beforeUpload = (file: UploadFile<any>) => {
        this.setState((state: any) => ({
            fileList: [...state.fileList, file],
        }));

        return false;
    }

    render() {
        const { previewVisible, previewImage, fileList } = this.state;
        const uploadButton = (
            <div>
                <Icon type="plus" />
                <div className="ant-upload-text">Upload</div>
            </div>
        );

        return (
            <div className="clearfix">
                <Upload
                    listType="picture-card"
                    fileList={fileList}
                    beforeUpload={this.beforeUpload}
                    onPreview={this.handlePreview}
                    onChange={this.handleChange}
                >
                    {fileList.length >= 4 ? null : uploadButton}
                </Upload>
                <Modal visible={previewVisible} footer={null} onCancel={this.handleCancel}>
                    <img alt="preview" style={{ width: '100%' }} src={previewImage} />
                </Modal>
            </div>
        );
    }
}