import React, {useEffect, useState} from "react";
import axios from "axios";
import Dropzone from "react-dropzone";

export default function EditPortfolio({editElemnt, refreshPortfolio}){

    useEffect(() => {
        setState(editElemnt);
    }, [editElemnt])

    const [state, setState] = useState({
        name: "",
        description: "",
        category: "eCommerce",
        position: "",
        url: "",
        thumb_image: "",
        banner_image: "",
        logo: "",
        editMode: false,
        apiUrl: "https://carlosterrero.devcamp.space/portfolio/portfolio_items",
        apiAction: 'post'
    });

    const thumbRef = React.createRef();
    const bannerRef = React.createRef();
    const logoRef = React.createRef();

    function deleteImage(imageType) {
        axios.delete(
            `https://api.devcamp.space/portfolio/delete-portfolio-image/${state
              .id}?image_type=${imageType}`,
            { withCredentials: true }
        ).then(response => {
            this.setState({
                [`${imageType}_url`]: ""
            });
        })
        .catch(error => {
            console.log("deleteImage error", error)
        })
    }

    function handleThumbDrop() {
        return {
            addedfile: file => this.setState({ thumb_image: file })
        };
    }

    function handleBannerDrop() {
        return {
            addedfile: file => this.setState({ banner_image: file })
        };
    }

    function handleLogoDrop() {
        return {
            addedfile: file => this.setState({ logo: file })
        };
    }

    function componentConfig(){
        return {
            iconFiletypes: [".jpg", ".png"],
            showFiletypeIcon: true,
            postUrl: "https//httpbin.org/post"
        };
    }

    function djsConfig(){
        return {
            addRemoveLinks: true,
            maxFiles: 1
        }
    }

    console.log(editElemnt);

    function buildForm() {
        let formData = new FormData();

        formData.append("portfolio_item[name]", state.name);
        formData.append("portfolio_item[description]", state.description);
        formData.append("portfolio_item[url]", state.url);
        formData.append("portfolio_item[category]", state.category);
        formData.append("portfolio_item[position]", state.position);
        
        if (state.thumb_image) {
            formData.append("portfolio_item[thumb_image]", state.thumb_image);
        }

        if (state.banner_image) {
            formData.append("portfolio_item[banner_image]", state.banner_image);
        }

        if (state.logo) {
            formData.append("portfolio_item[logo]", state.logo);
        }

        return formData;
    }

    function handleChange(event) {
        setState({
            ...state,
           [event.target.name]: event.target.value
        })
    }

    function handleSubmit(event) {

        event.preventDefault();
        console.log('dentro')
        axios({
            method: "post",
            url: "https://carlosterrero.devcamp.space/portfolio/portfolio_items",
            data: buildForm(),
            withCredentials: true
        })
        .then( response => {
            console.log(response)
            if (editElemnt != undefined){
                // this.props.handleEditFormSubmission();
                refreshPortfolio();
            } else {
                // this.props.handleNewFormSubmission(response.data.portfolio_item);    
            }

            setState({
                name: "",
                description: "",
                category: "eCommerce",
                position: "",
                url: "",
                thumb_image: "",
                banner_image: "",
                logo: "",
                editMode: false,
                apiUrl: "https://carlosterrero.devcamp.space/portfolio/portfolio_items",
                apiAction: 'post'
            });

            [thumbRef, bannerRef, logoRef].forEach(ref => {
                ref.current.dropzone.removeAllFiles();
            });
        })
        .catch(error => {
            console.log("portfolio from handleSubmit error", error );
        })
        
    }

    return(
        <form onSubmit={handleSubmit} className="portfolio-form-wrapper">
            <div className="two-column">
                <input 
                    type="text"
                    name="name" //Estos nombres, son los nombres que contiene this.state
                    placeholder="Portfolio Item Name"
                    value={state.name}
                    onChange={handleChange}
                />
                <input 
                    type="text"
                    name="url"
                    placeholder="url"
                    value={state.url}
                    onChange={handleChange}
                />
            </div>

            <div className="two-column">
                <input 
                    type="text"
                    name="position" //Estos nombres, son los nombres que contiene this.state
                    placeholder="Position"
                    value={state.position}
                    onChange={handleChange}
                />

                {/* Selector desplegable */}
                <select 
                    name="category"
                    value={state.category}
                    onChange={handleChange}
                    className="select-element"
                >
                    <option value="eCommerce">eCommerce</option>
                    <option value="Scheduling">Scheduling</option>
                    <option value="Enterprise">Enterprise</option>
                </select>
            </div>

            <div className="one-column">
                <textarea 
                    type="text"
                    name="description"
                    placeholder="Description"
                    value={state.description}
                    onChange={handleChange}
                />
            </div>

            <div className="image-uploaders three-column">


            <Dropzone onDrop={acceptedFiles => console.log(acceptedFiles)}
                djsConfig={djsConfig()}
            >
                {({getRootProps, getInputProps}) => (
                    <section>
                    <div {...getRootProps()}>
                        <input {...getInputProps()} />
                        <p>Drag 'n' drop some files here, or click to select files</p>
                        <img src={state.thumb_image_url}/>

                    </div>
                    </section>
                )}
            </Dropzone>
                {/* {state.thumb_image_url && state.editMode ? (
                    <div className="portfolio-manager-image-wrapper">
                        <img src={state.thumb_image_url}/>

                        <div className="image-removal-link">
                            <a onClick={() => deleteImage("thumb_image")}>
                                Remove file
                            </a>
                        </div>    
                    </div>
                ) : (
                    <DropzoneComponent
                        ref={this.thumbRef}
                        config = {this.componentConfig()}
                        djsConfig = {this.djsConfig()}
                        eventHandlers = {this.handleThumbDrop()}
                    >
                    <div className="dz-message">Thumbnail</div>
                    </DropzoneComponent>
                )} */}

                {/* {state.thumb_image_url && state.editMode ? (
                    <div className="portfolio-manager-image-wrapper">
                        <img src={state.thumb_image_url}/>

                        <div className="image-removal-link">
                            <a onClick={() => deleteImage("thumb_image")}>
                                Remove file
                            </a>
                        </div>    
                    </div>
                ) : (
                    <Dropzone onDrop={acceptedFiles => console.log(acceptedFiles)}
                        djsConfig={djsConfig()}
                    >
                        {({getRootProps, getInputProps}) => (
                            <section>
                            <div {...getRootProps()}>
                                <input {...getInputProps()} />
                                <p>Drag 'n' drop some files here, or click to select files</p>
                                <img src={state.thumb_image_url}/>

                            </div>
                            </section>
                        )}
                    </Dropzone>
                )} */}





                {/* {state.banner_image_url && state.editMode ? (
                    <div className="portfolio-manager-image-wrapper">
                        <img src={state.banner_image_url}/>

                        <div className="image-removal-link">
                            <a onClick={() => deleteImage("banner_image")}>
                                Remove file
                            </a>
                        </div>
                    </div>
                ) : (
                    <DropzoneComponent
                        ref={this.bannerRef}
                        config = {this.componentConfig()}
                        djsConfig = {this.djsConfig()}
                        eventHandlers = {this.handleBannerDrop()}
                    >
                    <div className="dz-message">Banner</div>
                    </DropzoneComponent>
                )} */}


                {/* {this.state.logo_url && this.state.editMode ? (
                    <div className="portfolio-manager-image-wrapper">
                        <img src={this.state.logo_url}/>

                        <div className="image-removal-link">
                            <a onClick={() => this.deleteImage("logo")}>
                                Remove file
                            </a>
                        </div>
                    </div>
                ) : (
                    <DropzoneComponent
                        ref={this.logoRef}
                        config = {this.componentConfig()}
                        djsConfig = {this.djsConfig()}
                        eventHandlers = {this.handleLogoDrop()}
                    >
                    <div className="dz-message">Logo</div>
                    </DropzoneComponent>
                )} */}

            </div>

            <div>
                <button className="btn" type="submit">Save</button>
            </div>
        </form>
    );
}