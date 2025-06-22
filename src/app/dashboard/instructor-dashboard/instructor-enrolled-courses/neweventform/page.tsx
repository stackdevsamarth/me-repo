"use client";
import BtnArrow from "@/svg/BtnArrow";
import { useRef } from "react";
import { useForm, useFieldArray } from "react-hook-form";
import { toast } from "react-toastify";

interface EventFormData {
  eventName: string;
  description: string;
  location: string;
  eventBy: string;
  eventDate: string;
  eventTime: string;
  seats: string;
  // bannerImage: FileList;
  speakers: { name: string; designation: string }[];
  timeline: { time: string; activity: string }[];
}

const NewEventForm = () => {
  const {
    register,
    control,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<EventFormData>({
    defaultValues: {
      speakers: [{ name: "", designation: "" }],
      timeline: [{ time: "", activity: "" }],
    },
  });

  const {
    fields: speakerFields,
    append: appendSpeaker,
    remove: removeSpeaker,
  } = useFieldArray({
    control,
    name: "speakers",
  });

  const {
    fields: timelineFields,
    append: appendTimeline,
    remove: removeTimeline,
  } = useFieldArray({
    control,
    name: "timeline",
  });

  const onSubmit = async (data: EventFormData) => {
    const formData = new FormData();

    formData.append("eventName", data.eventName);
    formData.append("description", data.description);
    formData.append("location", data.location);
    formData.append("eventBy", data.eventBy);
    formData.append("eventDate", data.eventDate);
    formData.append("eventTime", data.eventTime);
    formData.append("seats", data.seats);
    // formData.append("bannerImage", data.bannerImage[0]);

    formData.append("speakers", JSON.stringify(data.speakers));
    formData.append("timeline", JSON.stringify(data.timeline));

    try {
      const res = await fetch("/api/event", {
        method: "POST",
        body: formData,
      });

      if (res.ok) {
        toast.success("Event created successfully!");
        reset();
      } else {
        const errorData = await res.json();
        toast.error(`Failed: ${errorData.message || "Unknown error"}`);
      }
    } catch (error) {
      console.error("Submit error:", error);
      toast.error("Something went wrong while submitting the form.");
    }
  };

  return (
    <section className="contact-area section-py-120">
      <div className="container">
        <div className="row justify-content-center">
          <div className="col-lg-10">
            <div className="contact-form-wrap">
              <h4 className="title">Create New Event</h4>
              <p>Please fill in all the required details for the new event.</p>

              <form
                onSubmit={handleSubmit(onSubmit)}
                encType="multipart/form-data"
              >
                <div className="row">
                  <div className="col-md-12 mb-4">
                    {/* <div className="form-grp">
                      <label htmlFor="bannerImage" className="mb-2">
                        Event Banner Image *
                      </label>
                      <input
                        {...register("bannerImage", {
                          required: "Banner image is required",
                        })}
                        type="file"
                        accept="image/*"
                        className="form-control"
                        id="bannerImage"
                      />
                      <p className="form_error">
                        {errors.bannerImage?.message}
                      </p>
                    </div> */}
                  </div>
                </div>

                {/* Main event fields */}
                <div className="row">
                  <div className="col-md-6">
                    <div className="form-grp">
                      <input
                        {...register("eventName", {
                          required: "Event name is required",
                        })}
                        type="text"
                        placeholder="Event Name *"
                      />
                      <p className="form_error">{errors.eventName?.message}</p>
                    </div>
                  </div>
                  <div className="col-md-6">
                    <div className="form-grp">
                      <input
                        {...register("eventBy", {
                          required: "Event organizer is required",
                        })}
                        type="text"
                        placeholder="Event Organizer *"
                      />
                      <p className="form_error">{errors.eventBy?.message}</p>
                    </div>
                  </div>
                </div>

                <div className="row">
                  <div className="col-md-6">
                    <div className="form-grp">
                      <input
                        {...register("eventDate", {
                          required: "Event date is required",
                        })}
                        type="date"
                      />
                      <p className="form_error">{errors.eventDate?.message}</p>
                    </div>
                  </div>
                  <div className="col-md-6">
                    <div className="form-grp">
                      <input
                        {...register("eventTime", {
                          required: "Event time is required",
                        })}
                        type="time"
                      />
                      <p className="form_error">{errors.eventTime?.message}</p>
                    </div>
                  </div>
                </div>

                <div className="form-grp">
                  <input
                    {...register("location", {
                      required: "Location is required",
                    })}
                    type="text"
                    placeholder="Event Location *"
                  />
                  <p className="form_error">{errors.location?.message}</p>
                </div>

                <div className="form-grp">
                  <input
                    {...register("seats", {
                      required: "Number of seats is required",
                    })}
                    type="number"
                    placeholder="Number of Available Seats *"
                  />
                  <p className="form_error">{errors.seats?.message}</p>
                </div>

                <div className="form-grp">
                  <textarea
                    {...register("description", {
                      required: "Description is required",
                    })}
                    placeholder="Event Description *"
                    rows={5}
                  ></textarea>
                  <p className="form_error">{errors.description?.message}</p>
                </div>

                {/* Speakers */}
                <div className="mt-4">
                  <h5>Speakers</h5>
                  {speakerFields.map((field, index) => (
                    <div key={field.id} className="row mb-3">
                      <div className="col-md-5">
                        <input
                          {...register(`speakers.${index}.name`)}
                          placeholder="Speaker Name"
                          className="form-control"
                        />
                      </div>
                      <div className="col-md-5">
                        <input
                          {...register(`speakers.${index}.designation`)}
                          placeholder="Designation"
                          className="form-control"
                        />
                      </div>
                      <div className="col-md-2">
                        <button
                          type="button"
                          onClick={() => removeSpeaker(index)}
                          className="btn btn-danger"
                        >
                          Remove
                        </button>
                      </div>
                    </div>
                  ))}
                  <button
                    type="button"
                    onClick={() => appendSpeaker({ name: "", designation: "" })}
                    className="btn btn-secondary mb-3"
                  >
                    Add Speaker
                  </button>
                </div>

                {/* Timeline */}
                <div className="mt-4">
                  <h5>Timeline</h5>
                  {timelineFields.map((field, index) => (
                    <div key={field.id} className="row mb-3">
                      <div className="col-md-5">
                        <input
                          {...register(`timeline.${index}.time`)}
                          type="time"
                          className="form-control"
                        />
                      </div>
                      <div className="col-md-5">
                        <input
                          {...register(`timeline.${index}.activity`)}
                          placeholder="Activity"
                          className="form-control"
                        />
                      </div>
                      <div className="col-md-2">
                        <button
                          type="button"
                          onClick={() => removeTimeline(index)}
                          className="btn btn-danger"
                        >
                          Remove
                        </button>
                      </div>
                    </div>
                  ))}
                  <button
                    type="button"
                    onClick={() => appendTimeline({ time: "", activity: "" })}
                    className="btn btn-secondary mb-3"
                  >
                    Add Timeline
                  </button>
                </div>

                <button type="submit" className="btn btn-two arrow-btn mt-4">
                  Create Event <BtnArrow />
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default NewEventForm;
