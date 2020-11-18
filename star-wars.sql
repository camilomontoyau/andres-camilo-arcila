--
-- PostgreSQL database dump
--

-- Dumped from database version 13.1
-- Dumped by pg_dump version 13.1

SET statement_timeout = 0;
SET lock_timeout = 0;
SET idle_in_transaction_session_timeout = 0;
SET client_encoding = 'UTF8';
SET standard_conforming_strings = on;
SELECT pg_catalog.set_config('search_path', '', false);
SET check_function_bodies = false;
SET xmloption = content;
SET client_min_messages = warning;
SET row_security = off;

SET default_tablespace = '';

SET default_table_access_method = heap;

--
-- Name: character; Type: TABLE; Schema: public; Owner: postgres
--

CREATE TABLE public."character" (
    id_character integer NOT NULL,
    name character varying(30),
    gender character varying(10),
    birth_year character varying(10),
    height integer,
    mass integer,
    eye_color character varying(20),
    hair_color character varying(20),
    skin_color character varying(20)
);


ALTER TABLE public."character" OWNER TO postgres;

--
-- Name: character_id_character_seq; Type: SEQUENCE; Schema: public; Owner: postgres
--

CREATE SEQUENCE public.character_id_character_seq
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


ALTER TABLE public.character_id_character_seq OWNER TO postgres;

--
-- Name: character_id_character_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: postgres
--

ALTER SEQUENCE public.character_id_character_seq OWNED BY public."character".id_character;


--
-- Name: character id_character; Type: DEFAULT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public."character" ALTER COLUMN id_character SET DEFAULT nextval('public.character_id_character_seq'::regclass);


--
-- Data for Name: character; Type: TABLE DATA; Schema: public; Owner: postgres
--

COPY public."character" (id_character, name, gender, birth_year, height, mass, eye_color, hair_color, skin_color) FROM stdin;
1	Luke Skywalker	male	19BBY	176	77	blue	blond	fair
17	C-3PO	\N	112BBY	167	75	yellow	\N	gold
18	R2-D2	\N	33BBY	96	32	red	\N	white, blue
19	Darth Vader	male	41.9BBY	202	136	yellow	none	white
20	Leia Organa	female	19BBY	150	49	brown	brown	light
21	Owen Lars	male	52BBY	178	120	blue	brown, grey	light
22	Beru Whitesun Lars	female	47BBY	165	75	blue	brown	light
23	R5-D4	\N	unknown	97	32	red	\N	white, red
24	Biggs Darklighter	male	24BBY	183	84	brown	black	light
25	Obi-Wan Kenobi	male	57BBY	182	77	blue-gray	auburn, white	fair
\.


--
-- Name: character_id_character_seq; Type: SEQUENCE SET; Schema: public; Owner: postgres
--

SELECT pg_catalog.setval('public.character_id_character_seq', 25, true);


--
-- Name: character character_pkey; Type: CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public."character"
    ADD CONSTRAINT character_pkey PRIMARY KEY (id_character);


--
-- PostgreSQL database dump complete
--

