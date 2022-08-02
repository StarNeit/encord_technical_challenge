import React from "react";

import { Button, Input, Table, TextArea } from "src/components";
import { useImageManager } from "src/hooks/useImageManager";
import AppSwal from "src/utils/swal";

import Form, { useForm, Field } from "rc-field-form";
import { predict } from "src/api/predict";
import { UploadedImage } from "src/models/prediction";

const ImageList = () => {
  const { images, addPrediction } = useImageManager();
  const [form] = useForm();

  const promptUser = async () => {
    const result = await AppSwal.fire({
      title: "Please provide title and description",
      html: (
        <>
          <Form form={form} className="text-left">
            <div className="mb-4">
              <label htmlFor="title">Title</label>

              <Field name="title">
                <Input id="title" className="block w-full p-2" />
              </Field>
            </div>

            <div className="mb-4">
              <label htmlFor="description">Description</label>

              <Field name="description">
                <TextArea
                  id="description"
                  className="block w-full p-2"
                  required
                />
              </Field>
            </div>
          </Form>
        </>
      ),

      showCancelButton: true,
      confirmButtonText: "Submit",
    });

    return result;
  };

  const doPredict = async (image: UploadedImage) => {
    const { isConfirmed } = await promptUser();

    if (!isConfirmed) return;

    const formValues = form.getFieldsValue();

    if (!formValues.title || !formValues.description)
      return AppSwal.fire({
        title: "Error",
        html: "Title and description are required",
      });

    try {
      const { data: response } = await predict();

      addPrediction({
        title: formValues.title,
        description: formValues.description,
        predictDate: new Date(),
        response,
        image,
      });

      AppSwal.fire({
        title: "Success",
        html: "Predict successfully! Please check the Prediction tab",
      });
    } catch (e) {
      AppSwal.fire({
        title: "Error",
        html: "There is something wrong :(",
      });
    } finally {
      form.resetFields();
    }
  };

  return (
    <Table className="mt-5">
      <thead>
        <tr>
          <th>Filename</th>
          <th>Size</th>
          <th>Upload date</th>
          <th>Actions</th>
        </tr>
      </thead>

      <tbody>
        {images.map((image, i) => (
          <tr key={`${image.name}${i}`}>
            <td>{image.name}</td>
            <td>{image.size}</td>
            <td>{image.uploadDate.toISOString()}</td>
            <td>
              <Button onClick={() => doPredict(image)}>Predict</Button>
            </td>
          </tr>
        ))}
      </tbody>
    </Table>
  );
};

export default ImageList;
